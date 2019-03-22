using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Schibsted.Test.BE.Business.Entities.DTO;
using Schibsted.Test.BE.Business.Entities.POCO;
using Schibsted.Test.BE.Business.Interface.Services;

namespace Schibsted.Test.BE.API.Controllers
{
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService ?? throw new ArgumentNullException($"{nameof(_authService)} is null");
        }

        [Route("api/[controller]/login")]
        [HttpPost]
        public async Task<ActionResult<UserDTO>> Post(LoginCredentials credentials)
        {

            try
            {
                var result = await _authService.AuthenticateUserAsync(credentials.Email, credentials.Password);
                return Ok(result);

            }
            catch (Exception ex)
            {
                // TODO logError;
                return Forbid();
            }
        }
        [Route("api/[controller]/logout/{email}")]
        [HttpGet]
        public async Task<ActionResult<UserDTO>> Post(string email)
        {

            try
            {
                await _authService.Logout(email);
                return Ok("Successfully logout");

            }
            catch (Exception ex)
            {
                // TODO logError;
                return Forbid();
            }
        }
    }
}