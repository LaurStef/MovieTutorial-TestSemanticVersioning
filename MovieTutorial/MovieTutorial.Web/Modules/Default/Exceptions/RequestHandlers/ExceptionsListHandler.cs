using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<MovieTutorial.Default.ExceptionsRow>;
using MyRow = MovieTutorial.Default.ExceptionsRow;

namespace MovieTutorial.Default
{
    public interface IExceptionsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ExceptionsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IExceptionsListHandler
    {
        public ExceptionsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}