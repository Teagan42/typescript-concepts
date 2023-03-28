import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { UserService } from "../services";
import { Observable, tap } from "rxjs";

@Injectable()
export class RequestCountInterceptor implements NestInterceptor {
  constructor(private readonly userService: UserService) {
  }

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const {userId} = context.switchToHttp().getRequest().params;
    const requestCount = this.userService.incrementRequest(userId);
    return next
        .handle()
        .pipe(
            tap(() => console.log(`User ${userId} has been requested ${requestCount} times!`)));
  }
}
