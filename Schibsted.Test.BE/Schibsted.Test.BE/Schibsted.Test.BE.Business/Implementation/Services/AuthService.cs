using Microsoft.IdentityModel.Tokens;
using Schibsted.Test.BE.Business.Entities.DTO;
using Schibsted.Test.BE.Business.Entities.Extensions;
using Schibsted.Test.BE.Business.Interface.Repositories;
using Schibsted.Test.BE.Business.Interface.Services;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Schibsted.Test.BE.Business.Implementation.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        public AuthService(IUserRepository userRepository)
        {
            _userRepository = userRepository ?? throw new ArgumentNullException($"{nameof(_userRepository)} is null");
        }
        public async Task<UserDTO> AuthenticateUserAsync(string email, string password)
        {
            var user = await _userRepository.GetByEmailAsync(email);


            if (user == null) return null;
            if (user.Password == password)
            {
                var key = Encoding.ASCII.GetBytes("29YWhy4P6gmXkn967TsmuepUNSbxR2pTPj5HubAAsMPquFT"); // ¬¬
                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                     {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                     }),
                    Expires = DateTime.UtcNow.AddMinutes(60), // TODO SET TO 5MIN
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                user.AccessToken = tokenHandler.WriteToken(token);
                await _userRepository.PutUserAsync(user);
                return user.ConvertToDTO();
            }
            else
            {
                throw new ArgumentException("invalid password");
            }
        }

        public async Task Logout(string email)
        {
            var user = await _userRepository.GetByEmailAsync(email);
            if(user != null)
            {
                user.AccessToken = string.Empty;
                await _userRepository.PutUserAsync(user);
            }
        }
    }
}
