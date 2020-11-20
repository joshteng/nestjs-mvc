import { ArgumentsHost, Catch, ExceptionFilter, ForbiddenException, HttpException, UnauthorizedException } from "@nestjs/common";
import { Request, Response } from 'express';

@Catch(HttpException)
export class AuthExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    if (
      exception instanceof UnauthorizedException ||
      exception instanceof ForbiddenException
    ) {
      request.flash('alert', 'Please login and try again!');
      response.redirect('/login')
    } else {
      response.redirect('/404')
    }
  }
}
