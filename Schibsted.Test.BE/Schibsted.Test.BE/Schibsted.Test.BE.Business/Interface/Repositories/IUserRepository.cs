using Schibsted.Test.BE.Business.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Schibsted.Test.BE.Business.Interface.Repositories
{
    public interface IUserRepository
    {
        Task PostUserAsync(User user);
        Task<User> GetUserAsync(string id);
        Task<User> GetByEmailAsync(string email);
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task PutUserAsync(User user);
        Task DeleteUserAsync(string id);
        
    }
}
