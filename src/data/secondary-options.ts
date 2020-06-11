import { Option } from "./option";

const options: { [key: string]: Option[] } = {
  create: [
    {
      value: "sln",
      label: "new solution file",
      usage: "dotnet new sln"
    },
    {
      value: "project",
      label: "new project"
    },
    {
      value: "globaljson",
      label: "global.json file",
      usage: "dotnet new globaljson"
    },
    {
      value: "nugetconfig",
      label: "NuGet config",
      usage: "dotnet new nugetconfig"
    },
    {
      value: "webconfig",
      label: "Web config",
      usage: "dotnet new webconfig"
    }
  ],
  add: [
    {
      value: "csharp-project",
      label: "an existing C# project to a solution",
      usage: "dotnet sln [<solution>.sln] add <project>.c­sproj",
      note:
        "Replace <solution> and <project> with the items you want, if you are in .sln path youd do not have add solution name"
    },
    {
      value: "project-reference",
      label: "a reference from one project to another",
      usage: "dotnet add [<PROJECT>] reference <project>.csproj",
      note: "Replace <project> with the item you want"
    },
    {
      value: "package-reference",
      label: "a package reference to a project file",
      usage: "dotnet add [<project>] package <package_name>",
      note:
        "If not specified, the command searches the current directory for one\n\ne.g. 'dotnet add package Newtonsoft.Json'\n\nAfter running the command, there's a compatibility check to ensure the package is compatible with the frameworks in the project. If the check passes, a <PackageReference> element is added to the project file and dotnet restore is run."
    },
    {
      value: "pattern",
      label: "multiple C# projects to a solution using a globbing pattern",
      usage: "dotnet sln <solution>.sln add **/*.cs­proj",
      note: "Replace <solution> with the name you want"
    }
  ],
  delete: [
    {
      value: "project",
      label: "a C# project from a solution",
      usage: "dotnet sln todo.sln remove todo-a­pp/­tod­o-a­pp.c­sproj"
    },
    {
      value: "project-reference",
      label: "project-to-project references",
      usage:
        "dotnet remove [<PROJECT>] reference [-f|--framework] <PROJECT_REFERENCES>",
      note:
        "If not specified, the command searches the current directory for project\n\ne.g. 'dotnet remove reference lib1/lib1.csproj lib2/lib2.csproj'"
    },
    {
      value: "package-reference",
      label: "package reference from a project file",
      usage: "dotnet remove [<PROJECT>] package <PACKAGE_NAME>",
      note:
        "If not specified, the command searches the current directory for project\n\ne.g. dotnet remove package Newtonsoft.Json"
    }
  ],
  show: [
    {
      value: "help",
      label: "help for a command",
      usage: "dotnet help <command>",
      note:
        "Replace <command> with the command you need help for.\n\ne.g. dotnet build -h."
    },
    {
      value: "installed templates",
      label: "list of the available templates",
      usage: "dotnet new -l"
    },
    {
      value: "projects",
      label: "all projects in a solution file",
      usage: "dotnet sln list"
    },
    {
      value: "info",
      label:
        "detailed information about a .NET Core installation and the machine environment,",
      usage: "dotnet --info"
    },
    {
      value: "installed runtimes",
      label: "installed .NET Core runtimes",
      usage: "dotnet --list-runtimes"
    },
    {
      value: "installed sdks",
      label: "installed .NET Core SDKs",
      usage: "dotnet --list-sdks"
    },
    {
      value: "version",
      label: "version of the .NET Core SDK in use",
      usage: "dotnet --version"
    }
  ],
  restore: [
    {
      value: "dependencies",
      label: "dependencies and tools of a project",
      usage: "dotnet restore",
      note:
        "tarting with .NET Core 2.0 SDK, you don't have to run dotnet restore because it's run implicitly by all commands that require a restore to occur, such as dotnet new, dotnet build and dotnet run."
    }
  ],
  clean: [
    {
      value: "output",
      label: "the output of a project",
      usage: "dotnet clean [<project>]",
      note:
        "Replace <project> with your project name.\n\nThe dotnet clean command cleans the output of the previous build."
    }
  ],
  run: [
    {
      value: "sourcecode",
      label: "source code",
      usage: "dotnet run <myapp.dll>",
      note:
        "Replace <myapp.dll> with your dll.\n\nThe command depends on the dotnet build command to build the code. Any requirements for the build, such as that the project must be restored first, apply to dotnet run as well."
    }
  ],
  publish: [
    {
      value: "app",
      label: "the application and its dependencies",
      usage: "dotnet publish [<project>] [-c|--configuration] [-f|--framework]",
      note:
        "dotnet publish compiles the application, reads through its dependencies specified in the project file, and publishes the resulting set of files to a directory.\n\n If not specified, the command searches the current directory for project\n\n e.g. 'dotnet publish --framework netcoreapp1.1 --runtime osx.10.11-x64'"
    }
  ]
};

export const secondaryOptions = options;
