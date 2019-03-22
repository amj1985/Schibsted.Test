using System;
using System.Collections.Generic;
using System.Text;

namespace Schibsted.Test.BE.Crosscutting.Interface.Validation
{
    public interface IUserValidation
    {
        bool IsValidEmail(string email);
    }
}
