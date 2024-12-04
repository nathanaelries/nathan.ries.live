export const articles = [
  {
    slug: 'getting-started-with-devops',
    title: 'Getting Started with DevOps',
    date: '2023-09-15',
    image: '/images/articles/devops.jpg',
    excerpt: 'Learn the fundamental principles and practices of DevOps engineering.',
    content: `
      <h2>Introduction to DevOps</h2>
      <p>DevOps is a set of practices that combines software development and IT operations...</p>
    `
  },
  {
    slug: 'cloud-infrastructure-basics',
    title: 'Cloud Infrastructure Basics',
    date: '2023-09-10',
    image: '/images/articles/cloud.jpg',
    excerpt: 'Understanding the fundamentals of cloud infrastructure and services.',
    content: `
      <h2>Cloud Computing Fundamentals</h2>
      <p>Cloud computing has revolutionized how we build and deploy applications...</p>
    `
  },
  {
    slug: 'container-orchestration',
    title: 'Container Orchestration with Kubernetes',
    date: '2023-09-05',
    image: '/images/articles/kubernetes.jpg',
    excerpt: 'Deep dive into container orchestration using Kubernetes.',
    content: `
      <h2>Understanding Kubernetes</h2>
      <p>Kubernetes is an open-source container orchestration platform...</p>
    `
  }
];

export function getArticleBySlug(slug) {
  return articles.find(article => article.slug === slug);
}