using Schibsted.Test.BE.Business.Entities.DTO;
using Schibsted.Test.BE.Business.Interface.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Schibsted.Test.BE.Business.Interface.Services
{
    public interface IAuthService
    {
        Task<UserDTO> AuthenticateUserAsync(string email, string password);
        Task Logout(string email);
    }
}
