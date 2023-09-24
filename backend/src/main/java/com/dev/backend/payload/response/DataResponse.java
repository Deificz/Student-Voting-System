package com.dev.backend.payload.response;

import org.springframework.http.HttpStatus;

import java.util.List;

public class DataResponse {
    private int status;
    private List<?> data;

    public DataResponse(int status, List<?> data) {
        this.status = status;
        this.data = data;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public List<?> getData() {
        return data;
    }

    public void setData(List<?> data) {
        this.data = data;
    }
}
