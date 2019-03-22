using Schibsted.Test.BE.Business.Entities.Interface;
using System;
using System.Collections.Generic;
using System.Text;

namespace Schibsted.Test.BE.Infrastructure.Data.Implementation.Repository
{
    public interface IRepository<TEntity, in Tkey> where TEntity : IEntity<Tkey>
    {
    }
}
