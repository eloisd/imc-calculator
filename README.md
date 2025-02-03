## Deployment on AWS

1. Create acount or login
2. Search -> "EC2"
3. click "Launch instance"
4. Complete forms
    * Name: imc-calculator
    * OS: Ubuntu
    * Instance: t2.medium
    * Key pair: Create
        * Name: imckey
        * RSA
        * .pem
    * 8GB
    * click launch
5. wait for initialization
6. click on the id
7. click on connect
8. Now that you are on the ubuntu server terminal, run the following command
    1. sudo apt update
    2. sudo apt-get update
    3. sudo apt upgrade -y
    4. sudo apt install git curl unzip tar make sudo vim wget zsh nginx -y
    5. sudo chsh -s $(command -v zsh)
    6. sudo systemctl start nginx
    7. sudo systemctl enable nginx
    8. sudo npm install -g pm2
9. Install imc-calculator from github
    1. git clone https://github.com/eloisd/imc-calculator.git
    2. cd imc-calculator/my-imc-app/
    3. npm install
    4. npm build
    5. pm2 start npm --name "nextjs" -- start
    6. pm2 save
    7. pm2 startup
    8. sudo nano /etc/nginx/sites-available/nextjs
10. copy end past:
    ```bash
    server {
        listen 80;
        server_name your-domain.com;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```
11. sudo ln -s /etc/nginx/sites-available/nextjs /etc/nginx/sites-enabled/
12. sudo rm /etc/nginx/sites-enabled/default
13. sudo nginx -t
14. sudo systemctl restart nginx
15. Go to "security" > "Edit rules" > "New rule"
16. Add port 3000
17. Connect with your public IP address
18. Don't forget to stop or delete the server