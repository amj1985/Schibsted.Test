using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace Schibsted.Test.BE.Infrastructure.Data.Implementation.Context
{
    public class Context : IContext
    {
        public IMongoDatabase MongoDatabase { get; }

        public Context(string connectionString)
        {
            var mongoUrl = new MongoUrl(connectionString);
            IMongoClient client = new MongoClient(mongoUrl);
            MongoDatabase = client.GetDatabase(mongoUrl.DatabaseName);
        }
        public IMongoDatabase GetContext()
        {
            return MongoDatabase;
        }
    }
}
