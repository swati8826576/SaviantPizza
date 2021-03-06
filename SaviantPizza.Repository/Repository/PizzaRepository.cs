﻿using Microsoft.EntityFrameworkCore;
using SaviantPizza.Repository.Entity;
using SaviantPizza.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SaviantPizza.Repository.Repository
{
   public class PizzaRepository : GenericRepository<PizzaType>, IPizzaRepository
    {
        
        SaviantPizzaContext _context;
      public  PizzaRepository(SaviantPizzaContext context)
        {
            _context = context;
        }
    }
}
