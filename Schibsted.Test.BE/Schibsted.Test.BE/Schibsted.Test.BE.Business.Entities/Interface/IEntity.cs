using System;
using System.Collections.Generic;
using System.Text;

namespace Schibsted.Test.BE.Business.Entities.Interface
{
    public interface IEntity<TKey>
    {
        TKey Id { get; set; }
    }

    public interface IEntity : IEntity<string>
    {
    }
}
