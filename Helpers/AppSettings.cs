namespace nidam_sites
{
    public class AppSettings
    {
        public class AzStorage
        {
            public string StorageKey { get; set; }
            public string StorageName { get; set; }
        }

        public AzStorage AzureStorage { get; set; }
        public bool UseLocalDB { get; set; }
        public bool UseAzureStorage { get; set; }
    }
}