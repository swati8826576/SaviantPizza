﻿
using SaviantPizza.Business.IService;

namespace VendorAPIs.Service
{
    public class PizzaHut : IVendor
    {
        public bool PlaceOrder()
        {
            return true;
        }
    }
}
