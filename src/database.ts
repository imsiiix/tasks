import mongoose from 'mongoose';

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/ts-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('>>> Database connected');
  } catch (e) {
    console.log('Error');
  }
}

export default connect;
