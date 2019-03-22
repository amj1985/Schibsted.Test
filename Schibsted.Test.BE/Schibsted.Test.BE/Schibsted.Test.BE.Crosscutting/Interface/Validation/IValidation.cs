using System;
using System.Collections.Generic;
using System.Text;

namespace Schibsted.Test.BE.Crosscutting.Interface.Validation
{
    public interface IValidation
    {
        bool IsValid { get; }
        void Validate();
        string Message { get; }
    }
}
