namespace Sonorous.Shared
{
    public static class SonorousEnums
    {
        public enum MainCategories
        {
            Shop = 0,
            PublicTransport,
            PlaneTransport,
            Restaurant,
            Sport,
            Hospitalization,
            Police,
            Bank,
            Automotive,
            Cinema,
            TownHall,
            Faults,
            Hotels,
            Wellness,
            Library,
            Vet,
            Covid
        }

        public enum PublicTransportCategories
        {
            Bag = 0,
            BusLine,
            Departures,
            HasArrived,
            HowGoTo,
            Ticket
        }

        public enum FieldType
        {
            Boolean = 0,
            Number = 1,
            String = 2
        }
    }
}
