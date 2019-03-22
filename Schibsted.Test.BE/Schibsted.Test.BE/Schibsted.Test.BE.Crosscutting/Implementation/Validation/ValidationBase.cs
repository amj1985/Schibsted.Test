using Schibsted.Test.BE.Crosscutting.Interface.Validation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Schibsted.Test.BE.Crosscutting.Implementation.Validation
{
    public abstract class ValidationBase<T> : IValidation where T : class
    {
        public abstract bool IsValid { get; }
        public abstract string Message { get; }
        protected T Context { get; private set; }

        protected ValidationBase(T context)
        {
            Context = context ?? throw new ArgumentNullException($"{nameof(context)} is null");
        }
        public void Validate()
        {
            if (!IsValid)
            {
                throw new ValidationException(Message);
            }
        }
    }
}
