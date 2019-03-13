const admin= require("firebase-admin");
admin.initializeApp({
    credential: admin.credential.cert({
    "type": "service_account",
    "project_id": "tipsease-8615e",
    "private_key_id": "d2860998b0ea132870c1c9bab11a05bbb0cd9237",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDKQQwb3QybLiEr\nFds82Fi6ZRttnize1U/jfKC3c9NeaKXaPF5oaeDlLs70olf0cMwkG9H3FitAXWrJ\nM8PifudTBOhMKRzkxsAiV4xgtUpTOLYUixVBQvBx41VG5X07iHozbfR0oq8ZSdnK\nXyvmdPy980aSC6nv/eQRTPCQ4sw9cI6znqXtk6OVxxp6IXWiI7hjk+eK8TdOL9hB\nsyOsHphgmPjRH2O3Kz7VOR1amej+AYlmfOcOC/LB4IqJ0Yqc9rp9iEur3ULcqTmN\nYw0qMdY7IIPCkBbsbUBS9QOGZfo90v3Ojt898gVfdFv72xv+KqSajS6BWKJBtLcK\nKrXHwEb/AgMBAAECggEAXNgMW3QXN9sura0cVauI25PTSfg859PrFuYcjupUIrgO\nPobM3ciQzRQ2O7WUg6kOBRtiQLdEBol7nj4tkzknLoSHsIKE+X5FL96ZmcFPC7Hy\nX67TBIDaiKVPfbqWSPBnDFnSyIHvuD+fAxe6OtIEPZxCDoPdMEaP3eNAYXpDQIYs\nUHVdOC3ef1K2k1GAMs9AXH2943IYn0yV7bFr5jNEMuRDan9GJn7VqJPPLgD+BXBb\nBARya9ctaF5XBS2CTKnvir0EROf1W/ZOg1zsABoq9fVtv5uNFH4g4sMP4mX/KMxY\nXtmwfnyuK2j7lQ+VPVj4eKtm2VZYM2TtieVmVyPzbQKBgQDuZnl+KOSoicp57TgK\nDLQ3sa0k+eOZSPifivQsYghOpfeh5wHDuPHxDUABsHhJPnRnN5F/EyPnH8ARMt8w\nrtAMCfkYgplCJiLOOfNnwkqpWHE7tXHcwZAwrU5+HxZUJwOh5qZgZ4bXSv+QkkeQ\n1/VhfgRaC1ETGONJyWW+ktQEHQKBgQDZL3Ioyf8yamaT/7TtA0Zd8vnUnh19rEP6\nuZolKZAXh+tDEp1LQj5bafUnPSiw2ke/oP8VqHZtIQQyxF5NIXb+zuCLiS5nXLUS\ncbRY/u4Y3+hGgajoMSz6VQDfT0GT+6B1TOjaq0zcG8GHIO40Ox43UPhkTSPwCEOv\n1O9bd83UywKBgG16gbB99wOuw1zaozF6RAiPf4PLfcmWyRX7KcZ3/nifnuiqvRS0\niea4vvwHnjWEiNAdpKNGluY8nmdHhVdF8CSXL90hnF/UQ4eQ9UZg4wiBpP5WhMNr\n4Ft6OuGQRSDACdr/oMgEwtd7iYFKq7LIedcbl8QCDmlGtJnd8uthYhvBAoGAUj0V\nDTzv1TdVAFWjPNwwmQKYd1on8J56X0ZIiCnk1gQxoYQ663R6CENnASS3c8Azyuw7\nqwfPUCNgY5jX3Hz/ghz0CeI4IAuKxSEpGUnu/pxKZ+hQ/Rsh3OizG9v3CQIPEFu/\nEI4s3GvmLDTb/gskte2DIPfU099NQhdvS0NiPWECgYAlC5MAbbKNadA2hbXGWWwU\nxxK/lQbTSs3CLLG9tWgeO0lC0XC7uNxZtrHhFl0T0Aea/Lv/5btxczN5nf6lj8tQ\nxIdM4K+J0IK4Q3Hqx13ai/Ti03daiiKlVNKMAOxXruIPdsuyVtAI54Sb6g0PtULK\n1d7vgjI30NLE7DU/cjxl5w==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-10pol@tipsease-8615e.iam.gserviceaccount.com",
    "client_id": "115235760576668694265",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-10pol%40tipsease-8615e.iam.gserviceaccount.com"
    })
});
module.exports=admin;