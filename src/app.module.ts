import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
})
export class AppModule {}

// module - defined by annotating a class with @Module decorator
// decorator - provides metadata that Nest uses to organize the application structure
/** Properties
 *  providers - array of providers to be available within the module via dependcy injection
 * controllers - array of controllers to be instantiated within the module
 * exports: array of providers to export to other modueles
 * imports: list of modules required by this module. any exported provider by these modules will not be available in our module via dependency injection
 */

// create a new module run with nest/cli
// - nest g module tasks

/** Controllers
 * responsible for handling incoming requests and returning responses to the client
 * bound to specific paths (ie. "/tasks" for the task resource).
 * contain handlers, which handle endpoints and request methods (GET, POST, DELETE etc.)
 * can take advantage of dependency injection to consume providers within the same module
 */

/** Defining Controller
 * defined by decorating a class with the @Controller decorator
 * the decorator accepts a string, which is the path to be handled by the controller
 */

/** Defining a Handler
 * handlers are methods within the controller class, decorated with decorators such as @Get, @Post, @Delete, etc.
 */

/** Providers
 * can be injected into contructors if decorated as an @Injectable, via dependency injection
 * can be a plan value, a class, sync/async factory etc.
 * providers must be provided to a module for them to be usable
 * can be exported from a module -- and then be available to other modules that import it
 */

/** Service
 * defined as providers. NOT ALL PROVIDERS ARE SERVICES
 * commone concept within software development and are not exclusive NestJS, JavaScript or back-end development
 * Singleton when wrapped with @Injectable() and provded to a module, which means the same instance will be shared across the application -- acting as a single source of truth
 * the main source of business logic. Ie. a service will be called from a controller to validate data, create an item in the database and return a response
 */

/** Dependency Injection
 * any component within the NestJS ecosystem can inject a provider that is decorated with the @Injectable
 * define the dependencies in the contructor of the class. NestJS will take care of the injection for us, and it will then be available as a class property
 */
