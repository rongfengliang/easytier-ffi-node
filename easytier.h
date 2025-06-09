#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
typedef struct {
     const char* key;
     const char* value;
} KeyValuePair;

void get_error_msg(const char **out);
void free_string(char* s);
int32_t parse_config(const char* cfg_str);
int32_t run_network_instance(const char* cfg_str);
int32_t retain_network_instance(const char** inst_names, uintptr_t length);
int32_t collect_network_infos(KeyValuePair* infos, uintptr_t max_length);
