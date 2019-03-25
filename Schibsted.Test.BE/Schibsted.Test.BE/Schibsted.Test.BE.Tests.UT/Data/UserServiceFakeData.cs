using Schibsted.Test.BE.Business.Entities.DTO;
using Schibsted.Test.BE.Business.Entities.Entities;
using Schibsted.Test.BE.Business.Entities.Enums;
using Schibsted.Test.BE.Business.Entities.Extensions;
using Schibsted.Test.BE.Business.Interface.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Schibsted.Test.BE.Tests.UT.Data
{
    public class UserServiceFakeData : IUserService
    {
        private readonly List<User> _users;
        public UserServiceFakeData()
        {
            _users = new List<User>()
            {
                new User()
                {
                    Id = Guid.NewGuid().ToString(),
                    Email = "test@test.com",
                    Password = "test",
                    Roles = new string[] { Roles.Admin },
                    AccessToken = string.Empty
                },
                new User()
                {
                    Id = Guid.NewGuid().ToString(),
                    Email = "test2@test2.com",
                    Password = "test2",
                    Roles = new string[] { Roles.Admin },
                    AccessToken = string.Empty
                },
                new User()
                {
                    Id = Guid.NewGuid().ToString(),
                    Email = "test3@test3.com",
                    Password = "test3",
                    Roles = new string[] { Roles.Admin },
                    AccessToken = string.Empty
                }
            };
        }

        public Task AddUserAsync(User user)
        {
            return Task.Run(() =>
            {

            });
        }

        public Task<IEnumerable<UserDTO>> GetAllUsersAsync()
        {
            return Task.Run(() => _users.Select(e => e.ConvertToDTO()));
        }

        public Task<UserDTO> GetUserAsync(string id)
        {
            return Task.Run(() => _users.Select(e => e.ConvertToDTO()).Where(u => u.Id == id).FirstOrDefault());
        }

        public Task RemoveUserAsync(string id)
        {

            return Task.Run(() =>
            {
                var element = _users.First(e => e.Id == id);
                _users.Remove(element);
            });
        }

        public Task UpdateUserAsync(User user)
        {
            return Task.Run(() =>
            {
                var element = _users.First(e => e.Id == user.Id);
                var index = _users.IndexOf(element);
                _users.RemoveAt(index);
                _users.Add(user);
            });
        }
    }
}
