﻿using System;
using System.Collections.Generic;

namespace SaviantPizza.Repository.Entity
{
    public partial class VendorType
    {
        public VendorType()
        {
            OrderDetails = new HashSet<OrderDetails>();
            Pricing = new HashSet<Pricing>();
        }

        public int Id { get; set; }
        public string VendorName { get; set; }
        public bool? IsActive { get; set; }

        public virtual ICollection<OrderDetails> OrderDetails { get; set; }
        public virtual ICollection<Pricing> Pricing { get; set; }
    }
}
