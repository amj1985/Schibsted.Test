using Schibsted.Test.BE.Business.Entities.DTO;
using Schibsted.Test.BE.Business.Entities.Entities;
using Schibsted.Test.BE.Business.Entities.Extensions;
using Schibsted.Test.BE.Business.Interface.Repositories;
using Schibsted.Test.BE.Business.Interface.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Schibsted.Test.BE.Business.Implementation.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository ?? throw new ArgumentNullException($"{nameof(_userRepository)} is null");
        }

        public async Task AddUserAsync(User user)
        {
            await _userRepository.PostUserAsync(user);
        }

        public async Task<IEnumerable<UserDTO>> GetAllUsersAsync()
        {
            var result = await _userRepository.GetAllUsersAsync();
            return result.Select(e => e.ConvertToDTO());
        }

        public async Task<UserDTO> GetUserAsync(string id)
        {
            var result = await _userRepository.GetUserAsync(id);
            return result.ConvertToDTO();
        }

        public async Task RemoveUserAsync(string id)
        {
            await _userRepository.DeleteUserAsync(id);
        }

        public async Task UpdateUserAsync(User user)
        {
            await _userRepository.PutUserAsync(user);
        }
    }
}
