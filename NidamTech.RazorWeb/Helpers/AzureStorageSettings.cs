namespace NidamTech.RazorWeb.Helpers
{
    public class AzureStorageSettings
    {
        public class AzStorage
        {
            public string StorageKey { get; set; }
            public string StorageName { get; set; }
        }

        public AzStorage AzureStorage { get; set; }
        public bool UseAzureStorage { get; set; }
    }
}