using Microsoft.AspNetCore.Mvc;
using Schibsted.Test.BE.API.Controllers;
using Schibsted.Test.BE.Business.Entities.Entities;
using Schibsted.Test.BE.Business.Interface.Services;
using Schibsted.Test.BE.Tests.UT.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Schibsted.Test.BE.Tests.UT.Spec
{
    public class UserControllerSpec
    {
        IUserService _userService;
        UserController _controller;
        public UserControllerSpec()
        {
            _userService = new UserServiceFakeData();
            _controller = new UserController(_userService);
        }
        [Fact]
        public async Task GetAll_Return_Success_Spec()
        {
            // Act
            var res = await _controller.GetAll();
            // Assert
            Assert.IsType<OkObjectResult>(res.Result);
            Assert.Equal(3, res.Value.ToList().Count);
        }
        [Fact]
        public async Task Add_Return_BadRequest_Spec()
        {
            // Arrange
            User user = new User
            {
                Email = "u@u.com",
            };
             _controller.ModelState.AddModelError("Password", "Required");
            
            // Act
            var res = await _controller.Post(user);

            // Assert
            Assert.IsType<BadRequestObjectResult>(res);
        }
        [Fact]
        public async Task Add_Return_Success_Spec()
        {
            // Arrange
            User user = new User
            {
                Email = "u@u.com",
                Password = "u"
            };
            // Act
            var res = await _controller.Post(user);
            // Assert
            Assert.IsType<CreatedAtActionResult>(res);
        }
        [Fact]
        public async Task Add_Return_SuccessCreatedItem_Spec()
        {
            // Arrange
            User user = new User
            {
                Email = "u@u.com",
                Password = "u"
            };
            // Act
            var res = await _controller.Post(user) as CreatedAtActionResult;
            var element = res.Value as User;
            
            // Assert
            Assert.IsType<User>(element);
            Assert.Equal("u@u.com", element.Email);
        }
    }
}
