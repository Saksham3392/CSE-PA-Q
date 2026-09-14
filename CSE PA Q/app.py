# Alias entrypoint for Render and local servers
from server import app

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 2090))
    app.run(host="0.0.0.0", port=port, debug=True)
