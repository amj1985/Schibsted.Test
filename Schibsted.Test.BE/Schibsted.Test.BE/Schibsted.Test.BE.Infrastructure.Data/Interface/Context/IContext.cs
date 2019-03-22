using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace Schibsted.Test.BE.Infrastructure.Data.Implementation.Context
{
    public interface IContext
    {
        IMongoDatabase GetContext();
    }
}
