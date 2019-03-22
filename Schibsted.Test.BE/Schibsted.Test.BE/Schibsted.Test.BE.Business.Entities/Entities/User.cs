using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Schibsted.Test.BE.Business.Entities.Enums;
using Schibsted.Test.BE.Business.Entities.Interface;
using System;
using System.Collections.Generic;
using System.Text;

namespace Schibsted.Test.BE.Business.Entities.Entities
{
    public class User : IEntity
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string AccessToken { get; set; }
        public string Email { get; set; }      
        public string Password { get; set; }
        public IEnumerable<Roles> Roles { get; set; }
    }
}
