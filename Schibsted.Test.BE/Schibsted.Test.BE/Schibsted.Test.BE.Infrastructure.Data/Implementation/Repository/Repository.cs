using MongoDB.Bson;
using MongoDB.Driver;
using Schibsted.Test.BE.Business.Entities.Interface;
using Schibsted.Test.BE.Infrastructure.Data.Implementation.Repository;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Schibsted.Test.BE.Infrastructure.Data.Interface.Repository
{
    public abstract class Repository<TEntity> : IRepository<TEntity, string> where TEntity : IEntity
    {
        protected abstract IMongoCollection<TEntity> collection { get; }

        public virtual async Task<TEntity> GetByIdAsync(string id)
        {
            return await collection.Find(x => x.Id.Equals(id)).FirstOrDefaultAsync();
        }
        public virtual async Task AddAsync(TEntity entity)
        {
            await collection.InsertOneAsync(entity);
        }

        public virtual async Task<TEntity> UpdateAsync(TEntity entity)
        {
            if (string.IsNullOrWhiteSpace(entity.Id))
            {
                entity.Id = ObjectId.GenerateNewId().ToString();
            }

            await collection.ReplaceOneAsync(
                x => x.Id.Equals(entity.Id),
                entity,
                new UpdateOptions
                {
                    IsUpsert = true
                });

            return entity;
        }

        public virtual async Task DeleteAsync(string id)
        {
            await collection.DeleteOneAsync(x => x.Id.Equals(id));
        }

        public virtual async Task<ICollection<TEntity>> FindAllAsync(
            Expression<Func<TEntity, bool>> predicate)
        {
            return await collection.Find(predicate).ToListAsync();
        }
    }
}
