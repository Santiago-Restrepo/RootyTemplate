# Table of Contents

1. [What the f#%$ is this?](#Whatisthis)
2. [Installation](#Installation)
3. [Must haves](#MustHaves)
4. [Interesting links](#InterestingLinks)

## What the f%&$ is this? <a name="Whatisthis"></a>

This project was created to be a template for creating websites for customers easily using Next.js and the power of Sanity CMS 👾 The main objective is to optimize the development process and make it faster while still being easy to use for the customers 🫀 The vision is to have a modern and dynamic website that can be adapted to customer needs including a prompt based system that can generate a website based on a user prompt 🤖

## Installation Process <a name="Installation"></a>

Follow these steps to install and configure the project:

### 1. Install with npm

Make sure you have Node.js version 18.17.0 or higher installed. If not, download and install it from [Node.js website](https://nodejs.org/).

To install the project dependencies, open your terminal and run the following command:

```bash
npm install
```

### 2. Set environment variables

Add the following environment variables to your `.env.local` file:

```bash
NEXT_PUBLIC_SANITY_API_VERSION=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_PROJECT_ID=
SANITY_API_READ_TOKEN=
```

### 3. Run the project

Run the project:

```bash
npm run dev
```

## Must haves <a name="MustHaves"></a>

#### MVP 1.0

##### User:

- [ ] As an user I should be able to update page content and its structure **( layout )**
- [ ] As a user I should customize every page and their components **( UI )**

##### System:

- [x] As a system I should have a CMS (Content Management System) integrated in the application to a user can manage its content and integrations
- [x] As a system I should have preview mode where an user should be able to see its changes in real time
- [ ] As a system I should be able to be adapted to customer needs. It could be a blog page, and informative page or a combination of both
- [ ] As a system I should have a template with the following elements **(This template should get retrieved from CMS, and make frontend to be dynamic)**
  - [ ] Home Page
  - [ ] Blog Page **(List of posts)**
  - [ ] Post Page
  - [ ] Contact Page
  - [ ] About us Page

##### Developer:

- [ ] As a developer I should be able to develop custom features which an user can interact or not with them
- [ ] As a developer I should create as much as possible custom schemas and components to match with customer needs

---

#### MVP 2.0

##### User:

- [ ] As an user I should can write infinite possible of prompts to generate a website based on them

##### System:

- [ ] As a system I should be able to generate a default schema based on a user prompt using AI and fine tunned LLM models

##### Developer:

---

#### MVP 3.0

##### User:

- [ ] As an user I should have the posibility to transform a simple informative page / blog page into an ecommerce to manage orders, products, users, categories and payments

##### System:

- [ ] As a system I should have a template with the following elements **(This template should get retrieved from CMS, and make frontend to be dynamic)**
  - [ ] Product Page
  - [ ] Category Page **(List of Products)**
  - [ ] Cart Drawer
  - [ ] Checkout Page

##### Developer:

---

# Interesting links <a name="InterestingLinks"></a>

- [Vercel vs AWS](https://medium.com/@sushrit.pk21/how-when-and-why-you-should-switch-from-vercel-to-a-different-hosting-provider-especially-for-8ba25e439788)
