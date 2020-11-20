import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from 'express';

@Catch(HttpException)
export class SignUpFailedException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const res = exception.getResponse();

    if (
      exception instanceof BadRequestException
    ) {
      request.flash('alert', 'Something went wrong. Please try again!');
      response.render('users/new', { validation_errors: res['message'] })
    } else {
      response.redirect('/404')
    }
  }
}
