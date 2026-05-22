---
title: "The Load File Nobody Talks About: Building a Cross-Platform Excel-to-Concordance-DAT Converter"
date: 2026-05-22
excerpt: "Thirteen years of watching review teams fight load-file conversions, distilled into a small .NET CLI. Why the boring formats are where eDiscovery actually lives, and what building for them taught me about infrastructure."
---

If you've never worked in eDiscovery, a "Concordance DAT file" sounds like something from 1998. If you *have*, the phrase probably triggered a small flinch. The DAT load file (delimited not with commas but with control characters most people have never typed) is one of the formats the entire legal-review world quietly runs on. And it breaks in ways that eat hours you never planned for.

I spent 13 years watching review teams fight it. Eventually I got tired of watching and built [xls2dat](https://github.com/nathanaelries/Convert-Spreadsheet2Dat).

## The pain

The job *sounds* trivial: take a spreadsheet of document metadata and turn it into a DAT load file a review platform can ingest. In practice, three things go wrong over and over:

- **Encoding and special characters break the load.** A DAT file isn't comma-separated. It's UTF-16, field-delimited with byte `0x14`, text-qualified with `0xFE` (þ), with embedded newlines remapped so they don't blow up the row structure. Hand a naive exporter some real-world data (accented names, line breaks inside a cell, a stray þ) and the load fails, often silently, often halfway through a matter.
- **Manual conversion is slow and error-prone.** Someone hand-massages the export, the load dies at row 140,000, and now a person is bisecting a huge file at 9 PM hunting for the one bad character.
- **Big files choke existing tools.** The approaches that work on a sample file fall over on the file that actually matters.

None of this is glamorous. All of it is the difference between a review team starting on time and a review team starting angry.

## What I built

[xls2dat](https://github.com/nathanaelries/Convert-Spreadsheet2Dat) is a cross-platform .NET 8 command-line tool that converts spreadsheets to Concordance DAT, and it handles the formats people actually show up with, not just clean Excel:

- **Modern Excel** (`.xlsx`, `.xlsm`) read natively via ClosedXML
- **Delimited text** (`.csv`, `.tsv`, `.txt`) via CsvHelper, with delimiter inference
- **Legacy `.xls`, LibreOffice `.ods`, and Apple `.numbers`** via a LibreOffice fallback

Every worksheet in a workbook becomes its own `.dat`. It ships as **self-contained binaries for Windows, Linux, and macOS** with no .NET runtime to install, because the people who need this aren't going to set up a dev environment to convert a load file.

The part I'm proudest of is the unglamorous part: **the DAT specifics are correct, and configurable.** Field delimiter, text qualifier, newline replacement, and output encoding (UTF-16 LE/BE, UTF-8, UTF-8 BOM) all default to the right Concordance values but can be overridden when a particular platform wants something slightly different. That's the knowledge 13 years buys you: not *that* a DAT file exists, but exactly which bytes it expects and where the bodies are buried.

And because "trust me, it works" isn't good enough for something that touches legal data, it's structured like real software: a separate core library and CLI, an xUnit test suite, GitHub Actions, an MIT license, and tagged releases.

## Why this is really a DevOps story

Here's the thing I didn't fully appreciate until later: this little converter is the same instinct as everything else I do in infrastructure.

Find a manual, error-prone, repeated task. Understand it deeply enough to know where it *actually* breaks, not where it theoretically breaks. Then automate it so the failure mode disappears and people get their evenings back. Whether the artifact is a load-file converter, a containerized text-extraction service, or migrating a paid identity tool to self-hosted open-source in Docker, the move is identical: replace fragile human effort with a repeatable, observable, tested process.

eDiscovery is full of formats and workflows the broader software world has never heard of, run by people who've rarely had the tooling they deserve. That combination (deep domain knowledge plus the engineering instinct to automate it) is where I think the most leverage hides.

The DAT file isn't going anywhere. Might as well stop fighting it.

---

*[xls2dat is on GitHub](https://github.com/nathanaelries/Convert-Spreadsheet2Dat), MIT-licensed, with binaries for all three platforms. If you wrangle load files for a living, I'd genuinely like to hear how it holds up against yours.*
