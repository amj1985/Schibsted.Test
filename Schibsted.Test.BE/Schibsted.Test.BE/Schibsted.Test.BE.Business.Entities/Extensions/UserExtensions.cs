using Schibsted.Test.BE.Business.Entities.DTO;
using Schibsted.Test.BE.Business.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Schibsted.Test.BE.Business.Entities.Extensions
{
    public static class UserExtensions
    {
        public static UserDTO ConvertToDTO(this User source)
        {
            return new UserDTO
            {
                Id = source.Id,
                Email = source.Email,
                AccessToken = source.AccessToken,
                Roles = source.Roles.Select(e => e.ToString()).ToArray()           
            };
        }
    }
}

