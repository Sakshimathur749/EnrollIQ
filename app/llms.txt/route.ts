import { NextResponse } from "next/server";

export async function GET() {
  const content = `# EnrollIQ

> EnrollIQ is an education-focused CRM platform designed to help educational institutions, universities, colleges, and admission teams manage student enquiries, leads, admissions, and communication through a centralized platform.

## About EnrollIQ

EnrollIQ provides a centralized student recruitment and admission management solution. It helps educational institutions streamline their enquiry management, student engagement, admission workflows, and marketing operations.

Website: https://www.enrolliq.ai/

## Core Services

### 1. Education CRM
A centralized CRM solution for managing student enquiries, prospective students, admission pipelines, and counsellor activities.

### 2. Lead Management
Manage incoming leads with advanced search, filters, custom fields, lead assignment, follow-ups, and lead tracking.

### 3. Admission Management
Organize admission processes, student applications, registration workflows, and admission status tracking.

### 4. Student Application Forms
Create public enquiry forms, registration forms, and multi-step student application forms.

### 5. Marketing Integration
Connect marketing campaigns and lead-generation channels to centralize incoming student enquiries and track campaign performance.

### 6. Communication Management
Manage student communication and follow-ups through integrated communication channels.

### 7. Counsellor Management
Assign leads to counsellors, monitor activities, manage follow-ups, and streamline admission team operations.

## Important Pages & Resources

- [Homepage](https://www.enrolliq.ai/): Main landing page.
- [Services](https://www.enrolliq.ai/services): Explore core education CRM and admission services.
- [About Us](https://www.enrolliq.ai/about): Learn more about EnrollIQ's mission and platform.
- [Contact Us](https://www.enrolliq.ai/contact): Get in touch with the EnrollIQ team.
- [Login](https://www.enrolliq.ai/login): Access the platform portal.
- [Sitemap](https://www.enrolliq.ai/sitemap.xml): XML sitemap for search engine indexing.

## Target Audience

- Universities
- Colleges
- Educational institutions
- Admission departments
- Student recruitment teams
- Education consultants
- Admission counsellors

## Platform Purpose

EnrollIQ aims to simplify education lead management, improve student engagement, streamline admission workflows, and help institutions manage their complete enquiry-to-admission journey.
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
