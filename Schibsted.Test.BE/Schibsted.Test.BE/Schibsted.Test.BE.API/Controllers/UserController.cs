using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Schibsted.Test.BE.Business.Entities.DTO;
using Schibsted.Test.BE.Business.Entities.Entities;
using Schibsted.Test.BE.Business.Entities.Enums;
using Schibsted.Test.BE.Business.Interface.Services;

namespace Schibsted.Test.BE.API.Controllers
{

    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService ?? throw new ArgumentNullException($"{nameof(_userService)} is null");
        }
        [Route("api/[controller]/getall")]
        [HttpGet]
        [Authorize(Roles = Roles.Admin)]
        public async Task<ActionResult<UserDTO>> GetAll()
        {

            try
            {
                var result = await _userService.GetAllUsersAsync();
                return Ok(result);

            }
            catch (Exception ex)
            {
                // TODO logError;
                return Forbid();
            }
        }
        [Route("api/[controller]/{id}")]
        [HttpGet]
        [Authorize(Roles = Roles.Admin)]
        public async Task<ActionResult<UserDTO>> Get(string id)
        {

            try
            {
                var result = await _userService.GetUserAsync(id);
                if (result != null)
                {
                    return Ok(result);
                }
                else
                {
                    return NotFound($"user with id : {id} was not found");
                }
            }
            catch (Exception ex)
            {
                // TODO logError;
                return Forbid();
            }
        }
        [Route("api/[controller]")]
        [HttpPost]
        [Authorize(Roles = Roles.Admin)]
        public async Task<ActionResult> Post(User user)
        {
            try
            {
                await _userService.AddUserAsync(user);
                return Ok();
            }
            catch (Exception ex)
            {
                // TODO logError;
                return Forbid();
            }
        }
        [Route("api/[controller]")]
        [HttpPut]
        [Authorize(Roles = Roles.Admin)]
        public async Task<ActionResult> Put(User user)
        {
            try
            {
                await _userService.UpdateUserAsync(user);
                return Ok();
            }
            catch (Exception ex)
            {
                // TODO logError;
                return Forbid();
            }
        }
        [Route("api/[controller]/{id}")]
        [HttpDelete]
        [Authorize(Roles = Roles.Admin)]
        public async Task<ActionResult> Delete(string id)
        {
            try
            {
                await _userService.RemoveUserAsync(id);
                return Ok();
            }
            catch (Exception ex)
            {
                // TODO logError;
                return Forbid();
            }
        }
    }

}