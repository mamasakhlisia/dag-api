package com.nexident.masterclass_admin.dto;
import lombok.Data;
import java.time.LocalDateTime;


@Data
public class MasterclassCreateRequest {
    private String slug;
    private LocalDateTime date;
    private long templateId;
    private boolean isHappening;
}
