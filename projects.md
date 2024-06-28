# Projects

## `Homer`

[GitHub](https://github.com/qin-guan/Homer)

Jarvis of the house, but dumber. Tries to be helpful but sometimes isn't. Powered by Home Assistant, NetDaemon and New Relic. Runs a bunch of automations around the house (like controlling my toilet light, very helpful) and pipes some statistics to New Relic so I can make fancy dashboards.

Started after I got fed up with writing YAML Home Assistant automations.

Homer processes millions of events a month for me and makes it useful.

First time using ReactiveX (Rx.NET) and learned a lot.

:::details Tech stack

.NET, NetDaemon (+ Rx.NET), Aspire, New Relic, Coolify (deployment)

:::

## `DrivePermissionScanner`

[GitHub](https://github.com/qin-guan/DrivePermissionScanner)

Hobby project for work. We have 100k+ files and we want to grab an overview of their permissions.

:::details Tech stack

.NET, TPL Dataflow, Google Drive APIs

:::

:::details Mini rant

It's my first time building a fast (essentially concurrent/parallel) BFS implementation. I think it's pretty finnicky and also had a few people ask me why I chose to use .NET for it when there are "better" options out there like Go or Java which have nicer concurrency primitives (green threads / goroutines v. async await), so I feel like I need to justify it a little bit here.

Out of the box, TPL Dataflow is _super_ easy to setup and manage parallelism with. Every transformer is essentially it's own little function and I don't have to care about spinning up workers or manage synchronization across them (kind of). No need to spin up goroutines and manually writing WaitGroups for them. Everything just works.

> Of course, that's not saying that having to write goroutines or manually manage synchronization is a _bad_ thing. It's very helpful to have access to these low level primitives when you need them. It just so happens that having a higher level construct is nicer in this specific case! Every language has it's own tradeoffs, use the one you're most comfortable with for the project!

Also, there are nice benefits to using .NET, which I feel like aren't appreciated enough in the general developer community (because of Microsoft's tainted history). But why can't we appreciate technology for what it can accomplish today? 

* Modern .NET / C# is super fast. You get multi-threaded performance out of the box (v. NodeJS) without sacrificing high level implementation simplicity (v. Go)
* Source generators. I can build a CLI app by writing normal functions. All the CLI params are inferred for me automagically. So so so convenient. Of course, source generators can also do a whole lot more
* The syntax is so similar to TypeScript
* The syntax allows me to be more concise and expressive, and also _ever so slightly more_ functional!

Anyways, end of rant.

:::

## `sstalumniassociation`

[GitHub](https://github.com/sstalumniassociation/web) | [Website](https://sstaa.qinguan.me)

Platform for provide SST Alumni access to various services, such as entry approval, passes and event stuff.

:::details Tech stack

.NET, EF Core, gRPC

Nuxt3, Drizzle, Framework7, TailwindCSS, NuxtUI

CloudFlare, Turso, Fly.io

:::

## `paperless`

![Image](/projects-paperless.jpeg)

[GitHub](https://github.com/qin-guan/paperless) | [Website](https://paperless.pages.dev) 

A platform for you to make your own digital namecards, and share them.

Was a good place for me to play with Cloudflare KV and Next.JS 13's App Router + RSC capabilities.

## `wsa-tollbooth`

![Image](/projects-wsa-tollbooth.jpeg)

[GitHub](https://github.com/qin-guan/wsa-tollbooth) | [Website](https://wsa.qinguan.me)

A survey platform for World Skills ASEAN (Singapore 2023).

With my amazing decision making skills, I decided to create this platform 1 week before the event because why not. The platform allows event organizers to create surveys, and view responses with a little bit of analytics.

For admins (me!), there's also a lucky draw thingy.

Across 3 days, the platform collected around 2000 responses.

:::details Tech stack

Nuxt3, Prisma, tRPC, PrimeVue, UnoCSS, Redis

CloudFlare, CockroachDB, Fly.io

:::

## `admin.form.gov.sg`

No image :( 

[Website](https://admin.form.gov.sg)

An admin interface for [FormSG](https://form.gov.sg), designed to provide quick access to important information and facilitate updates to data on the platform.

Design heavily inspired by Linear, because Linear good 👍.

:::details Tech stack

Vite, React, React Router, Chakra UI, Tanstack Query, Tanstack Virtual, S3

NestJS, Mongoose, MongoDB, AWS Lambda

:::

