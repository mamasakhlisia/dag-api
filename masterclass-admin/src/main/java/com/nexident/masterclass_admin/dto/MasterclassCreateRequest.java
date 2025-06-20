package com.nexident.masterclass_admin.dto;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;


@Data
@Getter
public class MasterclassCreateRequest {
    private String slug;
    private LocalDateTime date;
    private int daysLong;
    private boolean definate;
    private boolean theoretical;
    private String link;
    private long templateId;
}
