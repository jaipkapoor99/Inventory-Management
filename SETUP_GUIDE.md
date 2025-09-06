# Setting Up a Multi-Project Workspace with pnpm

pnpm workspaces provide an efficient way to manage multiple projects (packages) within a single repository, often referred to as a monorepo. This setup allows for shared dependencies, simplified development workflows, and atomic changes across related projects.

## Prerequisites

Before you start, ensure you have:

* **Node.js:** Installed on your system.
* **pnpm:** Installed globally. If not, you can install it via npm: `npm install -g pnpm`

## Step-by-Step Guide

### 1. Initialize the Workspace Root

Create a new directory for your monorepo and initialize a `package.json` file. This `package.json` will typically be minimal, as project-specific dependencies will reside in their respective package directories.

```bash
mkdir my-monorepo
cd my-monorepo
pnpm init
```

Next, create a `pnpm-workspace.yaml` file in the root directory. This file defines the directories where pnpm should look for packages within your workspace.

```bash
touch pnpm-workspace.yaml
```

### 2. Create Your Projects (Packages)

Inside your monorepo root, create subdirectories for each of your projects. A common practice is to place them under a `packages/` directory.

```bash
mkdir packages
mkdir packages/app-frontend
mkdir packages/app-backend
mkdir packages/shared-ui
```

Navigate into each project directory and initialize a `package.json` for it:

```bash
cd packages/app-frontend
pnpm init
cd ../app-backend
pnpm init
cd ../shared-ui
pnpm init
cd ../..
```

### 3. Define Workspace Packages in `pnpm-workspace.yaml`

Open `pnpm-workspace.yaml` and specify the paths to your packages. You can use glob patterns to include multiple directories.

```yaml
# pnpm-workspace.yaml
packages:
  - 'packages/*'
  # - 'apps/*' # Example for another directory structure
  # - 'libs/*' # Example for libraries

# Optional: Ignore specific built dependencies if they cause issues
# ignoredBuiltDependencies:
#   - esbuild
```

### 4. Install Dependencies

From the monorepo root, run `pnpm install`. pnpm will automatically hoist common dependencies to the root `node_modules` and symlink internal packages.

```bash
pnpm install
```

**Internal Dependencies:**

When one package in your workspace depends on another (e.g., `app-frontend` depends on `shared-ui`), you can add it as a dependency using the `workspace:` protocol:

```bash
# In packages/app-frontend/package.json
{
  "name": "app-frontend",
  "dependencies": {
    "shared-ui": "workspace:*"
  }
}
```

Then, run `pnpm install` from the root again to link the internal dependency.

### 5. Running Scripts

#### Running Scripts in Individual Packages

You can run scripts defined in a package's `package.json` by navigating into that package's directory and using `pnpm run <script-name>`.

Alternatively, from the monorepo root, you can use `pnpm --filter <package-name> <script-name>`:

```bash
pnpm --filter app-frontend dev
pnpm --filter shared-ui build
```

#### Running Scripts Across All Packages

To run a script (e.g., `build` or `test`) in all packages that define it, use `pnpm -r <script-name>`:

```bash
pnpm -r build
```

pnpm will automatically determine the correct order for building packages based on their dependencies.

## Example Workspace Structure

```txt
my-monorepo/
├── package.json
├── pnpm-workspace.yaml
├── node_modules/ # Hoisted dependencies
└── packages/
    ├── app-frontend/
    │   ├── package.json
    │   └── src/
    ├── app-backend/
    │   ├── package.json
    │   └── src/
    └── shared-ui/
        ├── package.json
        └── src/
```

This guide provides a basic foundation for setting up a pnpm multi-project workspace. You can further customize it with specific build tools, testing frameworks, and deployment configurations for each of your projects.
