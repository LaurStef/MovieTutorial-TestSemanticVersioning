using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<MovieTutorial.Default.ExceptionsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = MovieTutorial.Default.ExceptionsRow;

namespace MovieTutorial.Default
{
    public interface IExceptionsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ExceptionsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IExceptionsSaveHandler
    {
        public ExceptionsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}