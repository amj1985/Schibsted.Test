using MongoDB.Driver;
using Schibsted.Test.BE.Business.Entities.Entities;
using Schibsted.Test.BE.Business.Interface.Repositories;
using Schibsted.Test.BE.Infrastructure.Data.Implementation.Context;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Schibsted.Test.BE.Infrastructure.Data.Interface.Repository
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        private readonly IContext _context;
        private const string CollectionName = "Users";
        protected override IMongoCollection<User> collection => _context.GetContext().GetCollection<User>(CollectionName);

        public UserRepository(IContext context)
        {
            _context = context ?? throw new ArgumentNullException($"{nameof(_context)} is null");
            Initialize();
        }
        public void Initialize()
        {
            var options = new CreateIndexOptions() { Unique = true };
            var field = new StringFieldDefinition<User>("Email");
            var indexDefinition = new IndexKeysDefinitionBuilder<User>().Ascending(field);
            var indexModel = new CreateIndexModel<User>(indexDefinition, options);
            collection.Indexes.CreateOne(indexModel);
        }
        public async Task AddUserAsync(User user)
        {
            var inner = user == null ? new Exception("cannot insert user with null values to a collection") : null;
            try
            {
                await AddAsync(user);
            }
            catch (Exception ex)
            {
                throw new Exception($"An error has occurred trying to insert user into {GetType().Name} \n Exception: {ex}", inner);
            }
        }

        public async Task<User> GetUserAsync(string id)
        {
            var inner = id == null ? new Exception("cannot find a user with null id") : null;
            try
            {
                return await GetByIdAsync(id);
            }
            catch (Exception ex)
            {
                throw new Exception($"An error has occurred trying to get user in {GetType().Name} \n Exception: {ex}", inner);
            }
        }

        public async Task PutUserAsync(User user)
        {
            var inner = user == null ? new Exception("cannot update user with null values") : null;
            try
            {
                await UpdateAsync(user);
            }
            catch (Exception ex)
            {
                throw new Exception($"An error has occurred trying to update user into {GetType().Name} \n Exception: {ex}", inner);
            }
        }

        public async Task DeleteUserAsync(string id)
        {
            var inner = id == null ? new Exception("cannot remove user with null id") : null;
            try
            {
                await DeleteAsync(id);
            }
            catch (Exception ex)
            {
                throw new Exception($"An error has occurred trying to remove an user in {GetType().Name} \n Exception: {ex}", inner);
            }
        }

        public async Task PostUserAsync(User user)
        {
            var inner = user == null ? new Exception("cannot insert user with null values to a collection") : null;
            try
            {
                await AddAsync(user);
            }
            catch (Exception ex)
            {
                throw new Exception($"An error has occurred trying to insert user into {GetType().Name} \n Exception: {ex}", inner);
            }
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            try
            {
                return await FindAllAsync(_ => true);
            }
            catch (Exception ex)
            {
                throw new Exception($"An error has occurred trying to get users in {GetType().Name}");
            }
        }

        public async Task<User> GetByEmailAsync(string email)
        {
            try
            {
                return await collection.Find(e => e.Email.Equals(email)).FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                throw new Exception($"An error has occurred trying to get users in {GetType().Name}");
            }
        }
    }
}
