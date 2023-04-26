using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<MovieTutorial.Default.ExceptionsRow>;
using MyRow = MovieTutorial.Default.ExceptionsRow;

namespace MovieTutorial.Default
{
    public interface IExceptionsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ExceptionsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IExceptionsRetrieveHandler
    {
        public ExceptionsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}