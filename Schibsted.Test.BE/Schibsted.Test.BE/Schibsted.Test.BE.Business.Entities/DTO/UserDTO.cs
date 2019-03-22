using Schibsted.Test.BE.Business.Entities.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Schibsted.Test.BE.Business.Entities.DTO
{
    public class UserDTO
    {
        public string AccessToken { get; set; }
        public string Email { get; set; }
        public string Id { get; set; }
        public IEnumerable<string> Roles { get; set; }
    }
}
