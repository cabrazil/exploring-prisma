# exploring-prisma
Prisma is an [open source](https://github.com/prisma/prisma) next-generation ORM. It consists of the following parts:

- **Prisma Client**: Auto-generated and type-safe query builder for Node.js & TypeScript
- **Prisma Migrate**: Migration system
- **Prisma Studio**: GUI to view and edit data in your database

Prisma Client can be used in *any* Node.js (supported versions) or TypeScript backend application (including serverless applications and microservices). This can be a [REST API](https://www.prisma.io/docs/concepts/overview/prisma-in-your-stack/rest), a [GraphQL API](https://www.prisma.io/docs/concepts/overview/prisma-in-your-stack/graphql), a gRPC API, or anything else that needs a database.

This repository explores how to work with Prisma, typescript and PostgreSQL

How to work with models, migration and relations.

How to create data, delete, update, find, filters, conditions and pagination.

Using these models:

1. Authors and Books

		model Authors {

		id   String @id @default(uuid())

		name String @unique

		books Books[]

		@@map("authors")
		
		}

		model Books {

		id        String  @id @default(uuid())

		name      String  @unique

		author_id String

		author    Authors @relation(fields: [author_id], references: [id])

		@@map("books")

		}

2. Courses, Teachers, Modules and Courses_Modules

		model Courses {

			id            String           @id @default(uuid())

			name          String           @unique

			description   String?

			duration      Int

			created_at    DateTime         @default(now())

			teacher       Teachers?        @relation(fields: [fk_id_teacher], references: [id])

			fk_id_teacher String?

			modules       CoursesModules[]

			@@map("courses")

		}

		model Teachers {

			id   String @id @default(uuid())

			name String @unique


			courses Courses[]

			@@map("teachers")

		}

		model Modules {

			id          String           @id @default(uuid())

			name        String           @unique

			description String

			created_at  DateTime         @default(now())

			courses     CoursesModules[]

			@@map("modules")

		}

		model CoursesModules {

			id           String   @id @default(uuid())

			course       Courses  @relation(fields: [fk_id_course], references: [id])

			fk_id_course String

			module       Modules  @relation(fields: [fk_id_module], references: [id])

			fk_id_module String

			created_at   DateTime @default(now())

			@@map("courses_modules")

		}
