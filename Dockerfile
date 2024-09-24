# Use a lightweight Python image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY appLibs.txt ./
RUN pip install --no-cache-dir -r appLibs.txt

# Install Jupyter Notebook
RUN pip install jupyter

# Copy the application files to the container
COPY app ./app 

# Expose the port for Jupyter Notebook
EXPOSE 8888

# Default command to run when starting the container
CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root", "--notebook-dir=/app/app"]
