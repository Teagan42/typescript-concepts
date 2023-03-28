import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { UserService } from "../services";
import { map, Observable, tap } from "rxjs";

@Injectable()
export class RequestCountInterceptor implements NestInterceptor {
  constructor(private readonly userService: UserService) {
  }

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const { userId } = context.switchToHttp().getRequest().params;
    const requestCount = this.userService.incrementRequest(userId);
    return next
        .handle()
        .pipe(
            tap(() => console.log(`User ${userId} has been requested ${requestCount} times!`)),
            map((data) => {
              const countData = { ...data, requestCount };
              if (requestCount > 10) {
                return {
                  ...countData,
                  "WOW": `${data.name} must be popular... or reviled...`
                }
              }
              return countData;
            })
        );
  }
}
