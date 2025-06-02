cd frontend
npm install
npm run dev
python backend

cd backend
cd bmcapi
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
