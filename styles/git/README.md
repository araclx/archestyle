# The Definitive Guide to Gitting

In Araclx we had to use [`git-flow`]() for most our project, then we've realised that it was wrong. When you are a
developer your role is to build as much code as it's possible not to think which commit-style will be good.

## git:commits

Reasonable approach to usage of Git by Araclx Foundation.

Commit Style Araclx Foundation ❤️ [Conventional Commits]() not only because auto-generated changelogs, but also for
direct, informational style.

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

```
feat(users): added login with google option
```

`type`: Defines a type of a commt.

```
feat: Add a new feature to the codebase (MINOR in semantic versioning).
fix: Fix a bug (equivalent to a PATCH in Semantic Versioning).
docs: Documentation changes.
style: Code style change (semicolon, indentation...).
refactor: Refactor code without changing public API.
perf: Update code performances.
test: Add test to an existing feature.
chore: Update something without impacting the user (ex: bump a dependency in package.json).
```

`scope`: Define a thing to which commit is related.

It's useful in small to mid teams, and smaller projects where complexity is small, but it's not a big problem - in more
complex project we're linking JIRA/GH Issue ID.

`body`: Add more context to your commit.

`footer`: Reference issues related to your commit.

## git:branches

We're using mostly [Trunk-based Branching]() on which we're creating one branch called `main` and everybody commits to
this one branch, in project with higher traffic we're creating `f/<name>` branches which stands for features, and
finally release branches for ex. `r/1.x` or `r/2.5.x` on which developers don't commit. Previously we was trying to work
with [git-flow]() but it seem to make more problems than benefits because **merge hell**, Trunk resolves these problems
with simple way - no merges, no problems.

This topic will be expanded soon since there is a lot of things to describe.
