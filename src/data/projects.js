export const projects = [
  {
    name: "venio-ng-tika-docker",
    tagline: "Apache Tika packaged as Docker images for eDiscovery text extraction",
    description:
      "Containerized builds of Apache Tika Server, the text-extraction engine that powers most eDiscovery platforms. Multiple Tika versions, multiple Java LTS variants (8/11/14/16/17), and minimal vs. full builds with GDAL and Tesseract OCR. The eDiscovery × DevOps wedge in one repo.",
    stack: ["Docker", "Apache Tika", "Java", "OCR", "Shell"],
    repo: "https://github.com/nathanaelries/venio-ng-tika-docker",
    featured: true
  },
  {
    name: "containerized-guacamole",
    tagline: "Production-ready Apache Guacamole with TLS, reverse proxy, and persistent state",
    description:
      "Docker Compose stack for Apache Guacamole: Nginx reverse proxy, Let's Encrypt TLS termination, PostgreSQL persistence. Two env vars to deploy. The kind of small, opinionated infra pattern a platform team actually ships.",
    stack: ["Docker Compose", "Nginx", "Let's Encrypt", "PostgreSQL", "TLS"],
    repo: "https://github.com/nathanaelries/containerized-guacamole",
    featured: true
  },
  {
    name: "Powershell-Convert-XLS-To-ConcordanceDAT",
    tagline: "Excel to Concordance DAT load-file converter for legal-review pipelines",
    description:
      "C# and PowerShell tool that converts Excel worksheets into Concordance DAT load files, a format only legaltech engineers have heard of. Parallel processing, batch ops, memory-efficient streaming. Built from 13 years of watching review teams fight load-file conversions.",
    stack: ["C#", "PowerShell", "Parallel processing", "eDiscovery"],
    repo: "https://github.com/nathanaelries/Powershell-Convert-XLS-To-ConcordanceDAT",
    featured: true
  },
  {
    name: "guacamole-install-rhel",
    tagline: "Bash installer for Apache Guacamole on RHEL",
    description:
      "End-to-end install script for Apache Guacamole on Red Hat Enterprise Linux. The pre-container version of the stack above, useful for environments where Docker isn't on the table. Together they show the evolution from script-driven to container-driven deployment.",
    stack: ["Bash", "RHEL", "Linux", "Apache Guacamole"],
    repo: "https://github.com/nathanaelries/guacamole-install-rhel",
    featured: false
  },
  {
    name: "gci-AsParallel",
    tagline: "Multi-threaded Get-ChildItem replacement for PowerShell",
    description:
      "Wraps .NET's EnumerateDirectories and EnumerateFiles with AsParallel() to speed up large directory traversals. Built after profiling a real bottleneck in an eDiscovery file-ingest job. 4★ / 1 fork.",
    stack: ["PowerShell", ".NET", "Performance"],
    repo: "https://github.com/nathanaelries/gci-AsParallel",
    featured: false
  }
];
