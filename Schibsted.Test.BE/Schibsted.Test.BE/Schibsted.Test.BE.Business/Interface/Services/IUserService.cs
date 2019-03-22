using Schibsted.Test.BE.Business.Entities.DTO;
using Schibsted.Test.BE.Business.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Schibsted.Test.BE.Business.Interface.Services
{
    public interface IUserService
    {
        Task AddUserAsync(User user);
        Task<UserDTO> GetUserAsync(string id);
        Task<IEnumerable<UserDTO>> GetAllUsersAsync();
        Task UpdateUserAsync(User user);
        Task RemoveUserAsync(string id);
    }
}
